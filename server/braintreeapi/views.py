from django.contrib.staticfiles import views

from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response

import braintree

braintree.Configuration.configure(braintree.Environment.Sandbox,
                                  merchant_id="your_merchant_id",
                                  public_key="your_public_key",
                                  private_key="your_private_key")


def index(request, path=''):
    if (path.endswith('.js')):
        return views.serve(request, path)
    else:
        return views.serve(request, 'index.html')


def getClientToken(request):
    token = braintree.ClientToken.generate()
    return HttpResponse(token)


class Checkout(APIView):

    def post(self, request, format=None):
        received_json_data = request.data
        received_params = received_json_data.get("params")
        nonce_from_the_client = received_params.get("payment_method_nonce",
                                                    "none")
        donation_id = received_params.get("donation_id", None)

        if (donation_id == "1"):
            amount = "10.00"
        elif (donation_id == "2"):
            amount = "25.00"
        elif (donation_id == "3"):
            amount = "50.00"
        else:
            return Response({'message': 'wrong donation id'}, status=400)

        result = braintree.Transaction.sale({
            "amount": amount,
            "payment_method_nonce": nonce_from_the_client,
            "options": {
                "submit_for_settlement": True
            }
        })

        if result.is_success or result.transaction:
            return Response({'message': 'good'}, status=200)
        else:
            return Response({'message': 'error in transaction'}, status=400)
