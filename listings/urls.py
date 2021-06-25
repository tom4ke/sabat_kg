from rest_framework import routers
from .api import CategoryViewSet, FavoriteListingViewSet, InquiryViewSet, ListingCommentViewSet, ListingViewSet, CityViewSet, CountryViewSet

router = routers.DefaultRouter()
router.register('api/categories', CategoryViewSet, 'categories')
router.register('api/courses', ListingViewSet, 'courses')
router.register('api/cities', CityViewSet, 'cities')
router.register('api/countries', CountryViewSet, 'countries')
router.register('api/favorite-listing',
                FavoriteListingViewSet, 'favorite-listing')
router.register('api/comment-listing',
                ListingCommentViewSet, 'comment-listing')
router.register('api/inquiry', InquiryViewSet, 'inquiry')

urlpatterns = router.urls
