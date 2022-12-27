from rest_framework import generics
from quote.models import Quote
from .serializers import QuoteSerializer


class ListQuotes(generics.ListAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer


class CreateQuote(generics.CreateAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer


class DetailQuote(generics.RetrieveAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    lookup_field = 'id'
