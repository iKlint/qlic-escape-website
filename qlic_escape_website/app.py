# app.py - Qlic Escape Limited Flask Application
import os
from flask import Flask, render_template, request, flash, redirect, url_for
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'fallback-secret-key')
app.config['DEBUG'] = os.getenv('DEBUG', 'False').lower() == 'true'

# Routes
@app.route('/')
def home():
    """Homepage with services showcase"""
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
        # Get form data directly
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone', '')
        message = request.form.get('message')
        
        # Print to console
        print("\n" + "="*50)
        print("NEW CONTACT FORM SUBMISSION")
        print("="*50)
        print(f"Name: {name}")
        print(f"Email: {email}")
        print(f"Phone: {phone}")
        print(f"Message: {message}")
        print("="*50 + "\n")
        
        flash('Thank you for your message! We\'ll get back to you within 24 hours.', 'success')
        return redirect(url_for('contact'))
    
    return render_template('contact.html')

@app.route('/services')
def services():
    """Services page (placeholder for future)"""
    return render_template('index.html')  # For now, redirect to home

@app.route('/about')
def about():
    """About page (placeholder for future)"""
    return render_template('index.html')  # For now, redirect to home

@app.route('/study')
def study():
    return render_template('study.html')

@app.route('/immigration')
def immigration():
    return render_template('immigration.html')

@app.route('/tourism')
def tourism():
    return render_template('tourism.html')

@app.route('/visa')
def visa():
    return render_template('visa.html')

@app.route('/flights-hotels')
def flights_hotels():
    return render_template('flights_hotels.html')

@app.route('/holiday-packages')
def holiday_packages():
    return render_template('holiday_packages.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')


# Error handlers
@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return render_template('index.html'), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return render_template('index.html'), 500

if __name__ == '__main__':
    app.run(
        debug=app.config['DEBUG'],
        host='0.0.0.0',
        port=5000
    )



# For Vercel deployment
def handler(request):
    return app(request.environ, lambda *args: None)