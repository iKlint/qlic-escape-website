from flask import Flask, render_template, request, flash, redirect, url_for
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = 'qlic-escape-secret-key-2025'

@app.route('/')
def home():
    services = [
        {
            'name': 'Custom Trip Planning',
            'description': 'Personalized itineraries crafted to match your interests, budget, and travel style',
            'price': 299,
            'icon': '🌍'
        },
        {
            'name': 'Luxury Travel Consultation', 
            'description': 'Premium experiences with exclusive access to high-end accommodations and activities',
            'price': 599,
            'icon': '✈️'
        },
        {
            'name': 'Adventure & Expedition Planning',
            'description': 'Thrilling adventures with expert guidance for unforgettable outdoor experiences',
            'price': 449,
            'icon': '🏔️'
        }
    ]
    return render_template('index.html', services=services)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone', '')
        message = request.form.get('message')
        
        print(f"Contact: {name}, {email}, {phone}, {message}")
        flash('Thank you for your message! We\'ll get back to you within 24 hours.', 'success')
        return redirect(url_for('contact'))
    
    return render_template('contact.html')

@app.route('/services')
def services():
    return render_template('index.html')

@app.route('/about') 
def about():
    return render_template('index.html')

# This is the key for Vercel
def handler(event, context):
    return app(event, context)

# Also expose app directly for Vercel
app = app
