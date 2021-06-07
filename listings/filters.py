from .models import Listing
from django_filters import rest_framework as filters

# Course Filter
class CourseFilter(filters.FilterSet):
    class Meta:
        model = Listing
        fields = {
            'title': ['icontains'],
            'price': ['gte', 'lte'],
            'description': ['icontains'],
            'city': ['exact'],
            'category': ['exact'],
            'owner': ['exact'],
        }