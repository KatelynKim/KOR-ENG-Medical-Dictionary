# Generated by Django 3.2.2 on 2021-07-13 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dictionary', '0005_auto_20210713_0549'),
    ]

    operations = [
        migrations.AlterField(
            model_name='term',
            name='abbreviation',
            field=models.CharField(default='', max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='term',
            name='description',
            field=models.TextField(default='', max_length=2000, null=True),
        ),
    ]
