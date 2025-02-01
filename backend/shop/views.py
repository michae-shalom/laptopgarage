# from django.shortcuts import render

# # Create your views here.
# from rest_framework import viewsets
# from .models import Product
# from .serializers import ProductSerializer

# class ProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer


from django.http import JsonResponse
from .models import Product

def get_products(request):
    products = list(Product.objects.values())  # Convert QuerySet to list of dictionaries
    return JsonResponse(products, safe=False)
    
