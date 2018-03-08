# Generated by Django 2.0 on 2018-03-08 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0003_auto_20180308_1720'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deck',
            name='next_move',
            field=models.PositiveSmallIntegerField(choices=[(1, 'FIRST_PLAYER_NAME'), (2, 'SECOND_PLAYER_NAME'), (3, 'THIRD_PLAYER_NAME'), (4, 'FOURTH_PLAYER_NAME')], default=1),
        ),
    ]