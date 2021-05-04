import i18next from 'i18next';

i18next.init({
    resources: {
        en: {
            translation: {
                "login": "login",
                "signup": "Don't have an account? Sign Up",
                "validPass": "Please input your password!",
                "validUsername": "Please input your username!",
                "todoApp": "TODO APPLICATION",
                "todoAdd": "to do add",
                "calendar": "Calendar",
                "edit": "edit",
                "complete": "complete",
                "ok": "ok",
                "cancel": "cancel",
                "modalTitle": "add/edit",
                "tamamlandi": "completed",
                "tamamlanmadi": "non completed",
                "username": "phone number",
                "password": "password",
            }
        },
        tr: {
            translation: {
                "login": "giris yap",
                "signup": "kayitli hesabin yok mu? kayit ol",
                "validPass": "lutfen sifreni gir!",
                "validUsername": "Lutfen kullanici adini gir!",
                "todoApp": "TODO UYGULAMASI",
                "todoAdd": "to do ekle",
                "calendar": "Takvim",
                "edit": "duzenle",
                "complete": "tamamla",
                "ok": "tamam",
                "cancel": "iptal",
                "modalTitle": "ekle/duzenle",
                "tamamlandi": "tamamlandi",
                "tamamlanmadi": "tamamlanmadi",
                "username": "telefon numarasi",
                "password": "sifre",
            }
        }
    },

    lng: "en",

    interpolation: {
        escapeValue: false
    }
});



