from typing import List
from rest_framework import viewsets, permissions
from .serializers import CategorySerializer, ListingSerializer, CountrySerializer, CitySerializer, ListingDetailSerializer, ListingAddSerializer
from .models import Category, Listing, Country, City
from rest_framework.response import Response
from rest_framework import status
from .filters import CourseFilter


# Category Viewset
class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAdminUser
    ]

    serializer_class = CategorySerializer

    def get_permissions(self):
        if self.action in ['update', 'partial_update', 'destroy', 'create']:
            # which is permissions.IsAdminUser
            self.permission_classes = [permissions.IsAdminUser]
        elif self.action in ['list']:
            # which is permissions.AllowAny
            self.permission_classes = [permissions.AllowAny]
        return super().get_permissions()

    def get_queryset(self):
        queryset = Category.objects.order_by('-title')
        return queryset


# Country Viewset
class CountryViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAdminUser
    ]

    serializer_class = CountrySerializer

    def get_permissions(self):
        if self.action in ['update', 'partial_update', 'destroy', 'create']:
            # which is permissions.IsAdminUser
            self.permission_classes = [permissions.IsAdminUser]
        elif self.action in ['list']:
            # which is permissions.IsAuthenticated
            self.permission_classes = [permissions.AllowAny]
        return super().get_permissions()

    def get_queryset(self):
        queryset = Country.objects.all()
        return queryset


# City Viewset
class CityViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAdminUser
    ]

    serializer_class = CitySerializer

    def get_permissions(self):
        if self.action in ['update', 'partial_update', 'destroy', 'create']:
            # which is permissions.IsAdminUser
            self.permission_classes = [permissions.IsAdminUser]
        elif self.action in ['list']:
            # which is permissions.IsAuthenticated
            self.permission_classes = [permissions.AllowAny]
        return super().get_permissions()

    def get_queryset(self):
        queryset = City.objects.all()
        return queryset


# AllListing Viewset
class ListingViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializer_class = ListingSerializer
    filterset_class = CourseFilter

    def get_queryset(self):
        queryset = Listing.objects.order_by('-list_date')

        # to sort by user
        if 'user_id' in self.request.GET:
            user_id = self.request.query_params.get('user_id')
            queryset.filter(owner=user_id)
        else:
            queryset.filter(is_published=True)
        return queryset

    def create(self, request, *args, **kwargs):

        serializer = ListingAddSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.owner == request.user:
            self.perform_destroy(instance)
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def perform_destroy(self, instance):
        instance.delete()
