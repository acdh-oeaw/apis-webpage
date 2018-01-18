from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.start_view, name="start"),
    url(r'^paas-project/$', views.paas_view, name="paas-project"),
    url(r'^apis-project/$', views.apis_view, name="apis-project"),
    url(r'^presentation_lyon17/$', views.presentation_lyon17, name="presentation_lyon17"),
    url(r'^presentation_innsbruck17/$', views.presentation_innsbruck17, name="presentation_innsbruck17"),
    url(r'^presentations_list/$', views.presentations_list, name="presentations_list"),
    url(r'^login/$', views.user_login, name='user_login'),
    url(r'^accounts/login/$', views.user_login, name='user_login'),
    url(r'^logout/$', views.user_logout, name='user_logout'),
    url(r'^set_user_settings/$', views.set_user_settings, name='set_user_settings')
]
