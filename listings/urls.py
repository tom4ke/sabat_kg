from rest_framework import routers
from .api import CategoryViewSet, ListingViewSet

router = routers.DefaultRouter()
router.register('api/categories', CategoryViewSet, 'categories')
router.register('api/listings', ListingViewSet, 'listings')

urlpatterns = router.urls
