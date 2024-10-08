from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
import base64
import os
from django.shortcuts import render
from django.http import JsonResponse


def generate_nonce():
    return base64.b64encode(os.urandom(16)).decode('utf-8')


@csrf_exempt
def chatbot(request):
    dictionary={'1st Avenue, New York, NY': {'lat': 40.7413546, 'lng': -73.9752791, 'popup': '1st Avenue, New York, NY'}, 
                '1600 Amphitheatre Parkway, Mountain View, CA': {'lat': 37.4217636, 'lng': -122.084614, 'popup': '1600 Amphitheatre Parkway, Mountain View, CA'},
                'Brasov': {'lat': 45.6427, 'lng': 25.5887, 'popup': 'Brasov'},
                  '10 Downing Street, London': {'lat': 51.5034927, 'lng': -0.12770540128798905, 'popup': 'Marker 3'}}
    markers_data = json.dumps(dictionary)  # Convert to JSON

    if request.method == 'POST':
        data = json.loads(request.body)
        
        # Process the data, e.g., save to database
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        birthday = data.get('birthday')
        email = data.get('email')
        phone_number = data.get('phone_number')
        message_to_office = data.get('message_to_office')
        clicked_buttons = data.get('clicked_buttons')
        selections = data.get('selections')
        address_selected = data.get('address_clicked')

        print(first_name,last_name,birthday,email,phone_number,message_to_office,clicked_buttons,selections,address_selected)
    return render(request, 'chatv2.html', {'markers_data': markers_data})



'''
def widget_view(request):
    custom_text = request.GET.get('custom_text', 'Thank You')
    nonce = "hardcoded_nonce_example"  # Temporarily hardcoded for testing
    response = render(request, 'widget_template.html', {'custom_text': custom_text, 'nonce': nonce})
    response['Content-Security-Policy'] = f"script-src 'self' 'nonce-{nonce}' https://chatbotnewv3-production.up.railway.app/;"
    return response

'''

def widget_view(request):
    custom_text = request.GET.get('custom_text', 'Default Text')
    return render(request, 'chatv2.html', {'custom_text': custom_text})


def get_markers_data(request):
    dictionary = {
        '1st Avenue, New York, NY': {'lat': 40.7413546, 'lng': -73.9752791, 'popup': '1st Avenue, New York, NY'}, 
        '1600 Amphitheatre Parkway, Mountain View, CA': {'lat': 37.4217636, 'lng': -122.084614, 'popup': '1600 Amphitheatre Parkway, Mountain View, CA'},
        'Brasov': {'lat': 45.6427, 'lng': 25.5887, 'popup': 'Brasov'},
        '10 Downing Street, London': {'lat': 51.5034927, 'lng': -0.12770540128798905, 'popup': 'Marker 3'}
    }
    return JsonResponse(dictionary, safe=True)

def test_template(request):
    return render(request, 'test_template.html')