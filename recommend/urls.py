# myapp/urls.py
from django.urls import path
from .views import GetRecommendationsAPIView

urlpatterns = [
    path('get_recommendations/', GetRecommendationsAPIView.as_view(), name='get_recommendations'),
]
