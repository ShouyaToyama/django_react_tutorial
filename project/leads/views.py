from leads.models import Lead
from leads.serializers import LeadSerializer
from rest_framework import viewsets

class LeadList(viewsets.ReadOnlyModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer