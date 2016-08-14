
var quest = {
  headerText: 'Тест по программированию',
  buttonText: 'Проверить мои результаты',
  questions: [
    { 
      title: 'Вопрос №1',
      options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
    },
    { 
      title: 'Вопрос №2',
      options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
    },
    { 
      title: 'Вопрос №3',
      options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
    }
  ],
  createQuest: function() {
    var parentElem = document.body;
    var questForm = document.createElement('form');
    questForm.className = "quest";
    var newHTML = '<h3 class="quest__header">' + this.headerText+'</h3>' +
                  '<ol class="quest__list">';

    for(var i = 0; i < this.questions.length; i++) {
      newHTML += '<li class="quest__item">' +
                    '<h4 class="quest__item-header">' + this.questions[i].title + '</h4>';

      for(var k = 0; k < this.questions[i].options.length; k++) {
        newHTML += '<label class="quest__item-option">' +
                    '<input type="radio" name="option_' + i + '">' +
                    '<span>' + this.questions[i].options[k] + '</span></label>';
      } 

      newHTML += '</li>';
    }

    newHTML += '</ol>' +
                  '<input type="button" value="' + this.buttonText + '" class="quest__button">';
    questForm.innerHTML = newHTML;
    parentElem.appendChild(questForm);
  }

};

quest.createQuest();
