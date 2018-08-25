define({ "api": [
  {
    "description": "<p>Изменение пароля</p>",
    "type": "post",
    "url": "/core/change_password/",
    "title": "04. Поменять пароль [change_password]",
    "name": "Change_password",
    "group": "01__Core",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth-token",
            "description": "<p>Токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current_password",
            "description": "<p>Current password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>New password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/change_password/"
      }
    ]
  },
  {
    "description": "<p>Изменение номера телефона <br>Завершение Изменения почты происходит в методе change_email_complete</p>",
    "type": "post",
    "url": "/core/change_email/",
    "title": "07. Поменять почту [change_email]",
    "group": "01__Core",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth-token",
            "description": "<p>Токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_email",
            "description": "<p>New email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "name": "PostCoreChange_email",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/change_email/"
      }
    ]
  },
  {
    "description": "<p>Завершение смены email. Полсе подтверждения высланного кода, процесс считается завершенным.</p>",
    "type": "post",
    "url": "/core/change_email_complete/",
    "title": "08. Завершение смены email [change_email_complete]",
    "group": "01__Core",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth-token",
            "description": "<p>Auth Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_email",
            "description": "<p>New email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code sent to phone or email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "name": "PostCoreChange_email_complete",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/change_email_complete/"
      }
    ]
  },
  {
    "description": "<p>Изменение номера телефона <br>Завершение Изменения номера происходит в методе change_phone_complete</p>",
    "type": "post",
    "url": "/core/change_phone/",
    "title": "05. Поменять номер телефона [change_phone]",
    "group": "01__Core",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth-token",
            "description": "<p>Токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_phone",
            "description": "<p>New Phone</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "name": "PostCoreChange_phone",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/change_phone/"
      }
    ]
  },
  {
    "description": "<p>Завершение смены номера. Полсе подтверждения высланного кода, процесс считается завершенным.</p>",
    "type": "post",
    "url": "/core/change_phone_complete/",
    "title": "06. Завершение смены номера [change_phone_complete]",
    "group": "01__Core",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth-token",
            "description": "<p>Auth Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_phone",
            "description": "<p>New phone or email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code sent to phone or email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "name": "PostCoreChange_phone_complete",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/change_phone_complete/"
      }
    ]
  },
  {
    "description": "<p>Cброс пароля по почте <br>Завершение Сброса пароля происходит в методе reset_email_password_complete</p>",
    "type": "post",
    "url": "/core/reset_email_password/",
    "title": "11. Cброс пароля по почте  [reset_email_password]",
    "group": "01__Core",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>New Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "name": "PostCoreReset_email_password",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/reset_email_password/"
      }
    ]
  },
  {
    "description": "<p>Завершение cброса пароля по почте</p>",
    "type": "post",
    "url": "/core/reset_email_password_complete/",
    "title": "12. Завершение cброса пароля по почте [reset_email_password_complete]",
    "group": "01__Core",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "name": "PostCoreReset_email_password_complete",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/reset_email_password_complete/"
      }
    ]
  },
  {
    "description": "<p>Сброс пароля <br>Завершение Сброса пароля происходит в методе reset_password_complete</p>",
    "type": "post",
    "url": "/core/reset_password/",
    "title": "09. Сброс пароля [reset_password]",
    "group": "01__Core",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>New Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "name": "PostCoreReset_password",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/reset_password/"
      }
    ]
  },
  {
    "description": "<p>Завершение сброса пароля. <br>Полсе подтверждения высланного кода, процесс считается завершенным.</p>",
    "type": "post",
    "url": "/core/reset_password_complete/",
    "title": "10. Завершение сброса пароля [reset_password_complete]",
    "group": "01__Core",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone or email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code sent to phone or email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "name": "PostCoreReset_password_complete",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/reset_password_complete/"
      }
    ]
  },
  {
    "description": "<p>Регистрация с помощью телефона или почты. <br>После регистрации, следует Завершение регистрации(<code>sign_up_complete</code>) с помощью высланного кода.<br></p>",
    "type": "post",
    "url": "/core/sign_up/",
    "title": "02. Регистрация [sign_up]",
    "name": "Sign_Up",
    "group": "01__Core",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>E-mail or Phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/sign_up/"
      }
    ]
  },
  {
    "description": "<p>Завершение регистрации. Полсе подтверждения высланного кода, регистрация считается завершенной, и только после этого пользователь числится в базе.</p>",
    "type": "post",
    "url": "/core/sign_up_complete/",
    "title": "03. Завершение регистрации [sign_up_complete]",
    "name": "Sign_Up_Complete",
    "group": "01__Core",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Registration phone or email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code sent to phone or email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/sign_up_complete/"
      }
    ]
  },
  {
    "description": "<p>Авторизация через <code>email</code> или <code>номер телефона</code></p>",
    "group": "01__Core",
    "type": "post",
    "url": "/core/sign_in/",
    "title": "01. Вход в систему [sign_in]",
    "name": "Sign_in",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>email or phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Core",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/core/sign_in/"
      }
    ]
  },
  {
    "description": "<p>Тест <br>Тестирование простого метода <code>GET</code></p>",
    "type": "get",
    "url": "/room/test/",
    "title": "01. Тест [test]",
    "group": "02__Room",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./room/views.py",
    "groupTitle": "02__Room",
    "name": "GetRoomTest",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/room/test/"
      }
    ]
  },
  {
    "description": "<p>Вход в комнату <br>Тестирование простого метода <code>post</code></p>",
    "type": "post",
    "url": "/room/enter/",
    "title": "02. Вход в комнату [enter_room]",
    "group": "02__Room",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./room/views.py",
    "groupTitle": "02__Room",
    "name": "PostRoomEnter",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/v1/room/enter/"
      }
    ]
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./static/apidoc/main.js",
    "group": "_home_msi_dev_projects_belka_v1_static_apidoc_main_js",
    "groupTitle": "_home_msi_dev_projects_belka_v1_static_apidoc_main_js",
    "name": ""
  }
] });
