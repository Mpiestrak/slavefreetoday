# Generated by Django 2.1.4 on 2018-12-12 17:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Articles',
            new_name='Article',
        )
        # migrations.RenameModel(
        #     old_name='Journals',
        #     new_name='Journal',
        # ),
    ]
