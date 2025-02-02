# # from django.shortcuts import render

# # # Create your views here.
# # from rest_framework import viewsets
# # from .models import Product
# # from .serializers import ProductSerializer

# # class ProductViewSet(viewsets.ModelViewSet):
# #     queryset = Product.objects.all()
# #     serializer_class = ProductSerializer


# from django.http import JsonResponse
# from .models import Product

# def get_products(request):
#     products = list(Product.objects.values())  # Convert QuerySet to list of dictionaries
#     return JsonResponse(products, safe=False)
    
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product

def get_products(request):
    products = list(Product.objects.values())
    return JsonResponse(products, safe=False)

def get_product_detail(request, product_id):  # ✅ Ensure this function exists
    product = get_object_or_404(Product, id=product_id)
    return JsonResponse({
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description
    })
