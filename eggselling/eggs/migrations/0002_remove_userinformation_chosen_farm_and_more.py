# Generated by Django 4.2.6 on 2023-11-10 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eggs', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userinformation',
            name='chosen_farm',
        ),
        migrations.RemoveField(
            model_name='userinformation',
            name='chosen_management',
        ),
        migrations.RemoveField(
            model_name='userinformation',
            name='chosen_store',
        ),
        migrations.RemoveField(
            model_name='userinformation',
            name='phone_number',
        ),
        migrations.RemoveField(
            model_name='userinformation',
            name='user',
        ),
        migrations.AddField(
            model_name='userinformation',
            name='username',
            field=models.CharField(default='username', max_length=128),
        ),
        migrations.DeleteModel(
            name='Farm',
        ),
        migrations.DeleteModel(
            name='Management',
        ),
        migrations.DeleteModel(
            name='Store',
        ),
    ]
