# Generated by Django 3.2.2 on 2021-07-13 12:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dictionary', '0007_auto_20210713_0552'),
    ]

    operations = [
        migrations.AlterField(
            model_name='term',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='dictionary.category'),
        ),
    ]
