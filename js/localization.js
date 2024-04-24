const getCurrentLangVariant = (uz, ru) => {
    return lang === langs.UZ ? uz : ru;
};

const localization = {
    ru: {
        errors: {
            errorDefault: "Это поле обязательно для заполнения",
            errorTin: "Вы ввели неверный ИНН.",
            errorRegion:  "Введите корректный регион.",
            errorPhone: "Введите корректный номер телефона."
        },
        common: {
            empty: "Не указан промокод.",
            successTitle: "Вы успешно авторизовались!",
            successDesc: "Ваши данные успешно прошли регистрацию являясь всего лишь частью общей картины, элементы.",
            successButton: "Отправить еще раз",
            title: "Реферальная программа",
            description: "Добро пожаловать! Вы здесь, потому что ваш друг поделился с вами уникальной ссылкой. Заполните необходимую информацию, и вы сможете воспользоваться специальным предложением от нашей реферальной программы. Желаем вам приятного опыта и хорошего дня!",
            agreement: "Нажимая кнопку активировать, вы даете согласие на обработку персональных данных, и ознакомлены с условиями",
            agreementLink: "публичной оферты",
            button: "Активировать",
            name:  "Имя",
            tin:  "ИНН",
            phone: "Номер телефона",
            region:  "Область",
            city:  "Город",
            copyright: "2024 © Smartpos. Все права защищены.",
            policy: "Политика конфиденциальности",
            policyBody: `Мы вынуждены отталкиваться от того, что внедрение современных методов предопределяет высокую востребованность моральных ценностей. Являясь лишь лишь частью общей структуры, элементы входного процесса блокируются в рамках своих рациональных ограничений. Высокий уровень реализации представителей онлайн является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет оценить значение как самодостаточных, так и внешне зависимых концептуальных решений.
                Мы вынуждены отталкиваться от того, что внедрение современных методов предопределяет высокую востребованность моральных ценностей. Являясь лишь лишь частью общей структуры, элементы входного процесса блокируются в рамках своих рациональных ограничений. Высокий уровень реализации представителей онлайн является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет оценить значение как самодостаточных, так и внешне зависимых концептуальных решений.
                Мы вынуждены отталкиваться от того, что внедрение современных методов предопределяет высокую востребованность моральных ценностей. Являясь лишь лишь частью общей структуры, элементы входного процесса блокируются в рамках своих рациональных ограничений. Высокий уровень реализации представителей онлайн является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет оценить значение как самодостаточных, так и внешне зависимых концептуальных решений.
                Мы вынуждены отталкиваться от того, что внедрение современных методов предопределяет высокую востребованность моральных ценностей. Являясь лишь лишь частью общей структуры, элементы входного процесса блокируются в рамках своих рациональных ограничений. Высокий уровень реализации представителей онлайн является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет оценить значение как самодостаточных, так и внешне зависимых концептуальных решений.
                Мы вынуждены отталкиваться от того, что внедрение современных методов предопределяет высокую востребованность моральных ценностей. Являясь лишь лишь частью общей структуры, элементы входного процесса блокируются в рамках своих рациональных ограничений. Высокий уровень реализации представителей онлайн является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет оценить значение как самодостаточных, так и внешне зависимых концептуальных решений.
                Мы вынуждены отталкиваться от того, что внедрение современных методов предопределяет высокую востребованность моральных ценностей. Являясь лишь лишь частью общей структуры, элементы входного процесса блокируются в рамках своих рациональных ограничений. Высокий уровень реализации представителей онлайн является четким доказательством простого факта: высокотехнологичная концепция общественного уклада позволяет оценить значение как самодостаточных, так и внешне зависимых концептуальных решений.
            `
        }
    }, 
    uz: {
        errors: {
            errorDefault: "Ushbu qator to'ldirilishi shart",
            errorTin: `Siz noto‘g‘ri TIN kiritdingiz`,
            errorRegion: "Yaroqli viloyatni kiriting.",
            errorPhone: "To'g'ri telefon raqamini kiriting." 
        },
        common: {
            empty: "Promo-kod kiritilmagan",
            successTitle: "Siz muvaffaqiyatli tizimga kirdingiz!",
            successDesc: "Sizning ma'lumotlaringiz muvaffaqiyatli ro'yxatdan o'tkazildi va umumiy rasm, elementlarning faqat bir qismidir.",
            successButton: "Boshqattan yuborish",
            title: "Referal programma",
            description: "Xush kelibsiz! Siz shu yerdasiz, chunki do'stingiz siz bilan noyob havolani baham ko'rdi. Kerakli ma'lumotlarni to'ldiring va siz bizning yo'naltiruvchi dasturimizning maxsus taklifidan foydalana olasiz. Sizga yoqimli tajriba va yaxshi kun tilaymiz!",
            agreement: "Faollashtirish tugmasini bosish orqali siz shaxsiy ma'lumotlarni qayta ishlashga rozilik bildirasiz va shartlar bilan tanishgan bo'lasiz",
            agreementLink: "ommaviy taklif",
            button: "Faollashtirish",
            name: "Ism",
            tin: "TIN",
            phone: "Telefon raqam",
            region: "Viloyat",
            city: "Shahar",
            copyright: "2024 © Smartpos. Barcha huquqlar himoyalangan.",
            policy: "Maxfiylik siyosati",
            policyBody: `
            Zamonaviy usullarning joriy etilishi axloqiy qadriyatlarga bo'lgan yuqori talabni oldindan belgilab qo'yganidan boshlashga majburmiz. Umumiy tuzilmaning faqat bir qismi bo'lgan holda, kiritish jarayonining elementlari o'zlarining oqilona cheklovlari doirasida bloklanadi. Onlayn vakillarni amalga oshirishning yuqori darajasi oddiy haqiqatning yorqin dalilidir: ijtimoiy tartibning yuqori texnologiyali kontseptsiyasi ham o'zini o'zi ta'minlaydigan, ham tashqi tomondan qaram bo'lgan kontseptual echimlarning ahamiyatini baholashga imkon beradi.
            <br/><br/>
            Zamonaviy usullarning joriy etilishi axloqiy qadriyatlarga bo'lgan yuqori talabni oldindan belgilab qo'yganidan boshlashga majburmiz. Umumiy tuzilmaning faqat bir qismi bo'lgan holda, kiritish jarayonining elementlari o'zlarining oqilona cheklovlari doirasida bloklanadi. Onlayn vakillarni amalga oshirishning yuqori darajasi oddiy haqiqatning yorqin dalilidir: ijtimoiy tartibning yuqori texnologiyali kontseptsiyasi ham o'zini o'zi ta'minlaydigan, ham tashqi tomondan qaram bo'lgan kontseptual echimlarning ahamiyatini baholashga imkon beradi.
            Zamonaviy usullarning joriy etilishi axloqiy qadriyatlarga bo'lgan yuqori talabni oldindan belgilab qo'yganidan boshlashga majburmiz. Umumiy tuzilmaning faqat bir qismi bo'lgan holda, kiritish jarayonining elementlari o'zlarining oqilona cheklovlari doirasida bloklanadi. Onlayn vakillarni amalga oshirishning yuqori darajasi oddiy haqiqatning yorqin dalilidir: ijtimoiy tartibning yuqori texnologiyali kontseptsiyasi ham o'zini o'zi ta'minlaydigan, ham tashqi tomondan qaram bo'lgan kontseptual echimlarning ahamiyatini baholashga imkon beradi.
            Zamonaviy usullarning joriy etilishi axloqiy qadriyatlarga bo'lgan yuqori talabni oldindan belgilab qo'yganidan boshlashga majburmiz. Umumiy tuzilmaning faqat bir qismi bo'lgan holda, kiritish jarayonining elementlari o'zlarining oqilona cheklovlari doirasida bloklanadi. Onlayn vakillarni amalga oshirishning yuqori darajasi oddiy haqiqatning yorqin dalilidir: ijtimoiy tartibning yuqori texnologiyali kontseptsiyasi ham o'zini o'zi ta'minlaydigan, ham tashqi tomondan qaram bo'lgan kontseptual echimlarning ahamiyatini baholashga imkon beradi.
            Zamonaviy usullarning joriy etilishi axloqiy qadriyatlarga bo'lgan yuqori talabni oldindan belgilab qo'yganidan boshlashga majburmiz. Umumiy tuzilmaning faqat bir qismi bo'lgan holda, kiritish jarayonining elementlari o'zlarining oqilona cheklovlari doirasida bloklanadi. Onlayn vakillarni amalga oshirishning yuqori darajasi oddiy haqiqatning yorqin dalilidir: ijtimoiy tartibning yuqori texnologiyali kontseptsiyasi ham o'zini o'zi ta'minlaydigan, ham tashqi tomondan qaram bo'lgan kontseptual echimlarning ahamiyatini baholashga imkon beradi.
            Zamonaviy usullarning joriy etilishi axloqiy qadriyatlarga bo'lgan yuqori talabni oldindan belgilab qo'yganidan boshlashga majburmiz. Umumiy tuzilmaning faqat bir qismi bo'lgan holda, kiritish jarayonining elementlari o'zlarining oqilona cheklovlari doirasida bloklanadi. Onlayn vakillarni amalga oshirishning yuqori darajasi oddiy haqiqatning yorqin dalilidir: ijtimoiy tartibning yuqori texnologiyali kontseptsiyasi ham o'zini o'zi ta'minlaydigan, ham tashqi tomondan qaram bo'lgan kontseptual echimlarning ahamiyatini baholashga imkon beradi.
            `
        }  
    }
}   