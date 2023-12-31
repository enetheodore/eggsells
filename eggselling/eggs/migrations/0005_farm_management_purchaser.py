# Generated by Django 4.2.6 on 2023-11-22 08:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('eggs', '0004_alter_userinformation_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Farm',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='eggs.userinformation')),
            ],
        ),
        migrations.CreateModel(
            name='Management',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='eggs.userinformation')),
            ],
        ),
        migrations.CreateModel(
            name='Purchaser',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='eggs.userinformation')),
            ],
        ),
    ]
