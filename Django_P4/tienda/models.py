#!/usr/bin/python
# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.db import models

# Create your models here.

# Creamos la estructura de nuestra base de datos.
# Serán personas que se introduacan en nuestra página para hacer peticiones
# Blank --> validar un formulario en el proyecto
# Null --> la base de datos
# Al estar ambos en True, podemos dejar los campos vacios

class Registrado(models.Model):
	nombre = models.CharField(max_length=120, blank=True, null=True)
	email = models.EmailField()
	codigo_postal = models.IntegerField(blank =True, null =True)
	edad = models.IntegerField(blank =True, null =True)
	timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
	actualizado = models.DateTimeField(auto_now_add=False, auto_now=True)

	def __unicode__(self): #Python 3 __str__
		return self.email



