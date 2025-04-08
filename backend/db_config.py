from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_db(app):
    # Database Configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Maddy%40789@localhost/resume?auth_plugin_map={"mysql_native_password": "pymysql.auth.NativePasswordAuth"}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ECHO'] = True  # This will log all SQL queries
    db.init_app(app)
    
    # Test database connection
    try:
        with app.app_context():
            db.engine.connect()
            print("Database connected successfully!")
    except Exception as e:
        print(f"Database connection failed! Error: {e}")
