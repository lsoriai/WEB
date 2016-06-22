#!/usr/bin/python
# -*- coding: utf-8 -*-

from django.contrib import admin
from .models import Registrado #Hacemos referencia a este modelo concreto.

# Register your models here.
# es como se visualizará en la interfaz administrativa, todos los datos

class AdminRegistrado(admin.ModelAdmin):
	list_display = ["__unicode__","nombre","codigo_postal","edad","timestamp","actualizado"]
	class Meta:
		model = Registrado

# Por ultimo registramos el modelo
admin.site.register(Registrado,AdminRegistrado)
