# Generated by Django 5.0.6 on 2025-01-04 01:53

import django.db.models.deletion
from django.db import migrations, models
from blog.models import User

def create_default_user(apps, schema_editor):
    user = User.objects.create(
     email='test@test.com',
     user_name='default',
     password='test1234')
    return user.id


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_default_user, reverse_code=migrations.RunPython.noop),
        migrations.AddField(
            model_name='comment',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='blog.user'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='post',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='blog.post'),
        ),
    ]
