from django.shortcuts import render

# Create your views here.

def inicio(request):
	return render(request, "index.html")

def bicis(request):
	return render(request, "bicis.html")

def discos(request):
	return render(request, "discos.html")

def libros(request):
	return render(request, "libros.html")