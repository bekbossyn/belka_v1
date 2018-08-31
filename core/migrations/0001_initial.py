# Generated by Django 2.1 on 2018-08-31 14:15

from django.conf import settings
import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion
import utils.upload


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0009_alter_user_last_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='MainUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('phone', models.CharField(blank=True, db_index=True, max_length=200, null=True, unique=True)),
                ('name', models.CharField(blank=True, max_length=200)),
                ('email', models.CharField(blank=True, db_index=True, max_length=200, null=True, unique=True)),
                ('language', models.IntegerField(choices=[(1, 'русский'), (2, 'қазақша'), (3, 'english')], default=1)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to=utils.upload.avatar_upload)),
                ('avatar_big', models.ImageField(blank=True, null=True, upload_to=utils.upload.avatar_upload)),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('review', models.FloatField(blank=True, null=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('player_ids', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, default='', max_length=255, null=True), default=list, size=None)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
            },
        ),
        migrations.CreateModel(
            name='Activation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('phone', models.CharField(blank=True, db_index=True, max_length=100, null=True)),
                ('new_phone', models.CharField(blank=True, db_index=True, max_length=100, null=True)),
                ('email', models.CharField(blank=True, db_index=True, max_length=100, null=True)),
                ('new_email', models.CharField(blank=True, db_index=True, max_length=100, null=True)),
                ('password', models.CharField(db_index=True, max_length=100)),
                ('code', models.CharField(db_index=True, max_length=100)),
                ('used', models.BooleanField(db_index=True, default=False)),
                ('to_reset', models.BooleanField(db_index=True, default=False)),
                ('to_change_phone', models.BooleanField(db_index=True, default=False)),
                ('to_change_email', models.BooleanField(db_index=True, default=False)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to=utils.upload.avatar_upload_v2)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-timestamp'],
            },
        ),
        migrations.CreateModel(
            name='TokenLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(max_length=500)),
                ('active', models.BooleanField(default=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tokens', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AlterIndexTogether(
            name='activation',
            index_together={('phone', 'email', 'used')},
        ),
        migrations.AlterIndexTogether(
            name='tokenlog',
            index_together={('token', 'user')},
        ),
    ]
