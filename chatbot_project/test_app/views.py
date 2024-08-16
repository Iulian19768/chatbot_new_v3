from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt



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

        print(first_name,last_name,birthday,email,phone_number,message_to_office,clicked_buttons,selections)
    return render(request, 'chatv2.html', {'markers_data': markers_data})




def widget_view(request):
    custom_text = request.GET.get('custom_text', 'Thank You')
    return render(request, 'chatbot.html', {'custom_text': custom_text})
