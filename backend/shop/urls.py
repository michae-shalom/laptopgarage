# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import ProductViewSet

# router = DefaultRouter()
# router.register(r'products', ProductViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]


from django.urls import path
from .views import get_products

urlpatterns = [
    path('products/', get_products, name='get_products'),
]
