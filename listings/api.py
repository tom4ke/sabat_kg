from rest_framework import viewsets, permissions
from .serializers import CategorySerializer, ListingSerializer
from .models import Category, Listing
from rest_framework.response import Response
from rest_framework import status


# Category Viewset
class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAdminUser
    ]

    serializer_class = CategorySerializer

    def get_queryset(self):
        queryset = Category.objects.all()
        return queryset


# AllListing Viewset
class ListingViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializer_class = ListingSerializer

    def get_queryset(self):
        queryset = Listing.objects.order_by('-list_date')
        if 'user_id' in self.request.GET:
            user_id = self.request.query_params.get('user_id')
            queryset.filter(owner=user_id)
        else:
            queryset.filter(is_published=True)
        return queryset

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.owner == request.user:
            self.perform_destroy(instance)
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def perform_destroy(self, instance):
        instance.delete()
