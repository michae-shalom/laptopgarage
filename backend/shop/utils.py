import json
from shop.models import Product

def import_fake_products():
    with open("products.json", "r") as file:
        products = json.load(file)

        for item in products:
            Product.objects.create(
                name=item["name"],
                price=item["price"],
                description=item["description"],
                image=item["image"]
            )
    print("✅ Fake products imported successfully!")
