# Generated by Django 5.0.6 on 2024-07-09 04:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_alter_comment_date_of_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='date_of_comment',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]