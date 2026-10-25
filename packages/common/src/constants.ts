import type { GameSettings } from "@razzia/common/types/game"

export const EVENTS = {
  GAME: {
    STATUS: "game:status",
    SUCCESS_JOIN: "game:successJoin",
    TOTAL_PLAYERS: "game:totalPlayers",
    ERROR_MESSAGE: "game:errorMessage",
    START_COOLDOWN: "game:startCooldown",
    COOLDOWN: "game:cooldown",
    RESET: "game:reset",
    UPDATE_QUESTION: "game:updateQuestion",
    PLAYER_ANSWER: "game:playerAnswer",
  },
  PLAYER: {
    SUCCESS_RECONNECT: "player:successReconnect",
    UPDATE_LEADERBOARD: "player:updateLeaderboard",
    LOGIN: "player:login",
    RECONNECT: "player:reconnect",
    LEAVE: "player:leave",
    SELECTED_ANSWER: "player:selectedAnswer",
  },
  MANAGER: {
    SUCCESS_RECONNECT: "manager:successReconnect",
    STATUS_UPDATE: "manager:statusUpdate",
    NEW_PLAYER: "manager:newPlayer",
    REMOVE_PLAYER: "manager:removePlayer",
    PLAYER_KICKED: "manager:playerKicked",
    PLAYER_UPDATED: "manager:playerUpdated",
    RECONNECT: "manager:reconnect",
    LEAVE: "manager:leave",
    KICK_PLAYER: "manager:kickPlayer",
    START_GAME: "manager:startGame",
    ADVANCE: "manager:advance",
    AUTO_ADVANCE: "manager:autoAdvance",
    SET_LOCK: "manager:setLock",
    LOCK_UPDATED: "manager:lockUpdated",
  },
} as const

export const SESSION_ROLES = {
  PLAYER: "player",
  MANAGER: "manager",
} as const

export const NO_TIME_LIMIT = -1

export const AUTO_ADVANCE_DELAY = { MIN: 3, MAX: 600 } as const

export const createDefaultGameSettings = (): GameSettings => ({
  generatedUsernames: false,
  answersOnly: false,
  autoAdvance: {
    enable: false,
    responsesDelay: 10,
    leaderboardDelay: 5,
  },
})

export const MAX_POINTS = 1000

export const MIN_ANSWERS = 2

export const MAX_ANSWERS = 4

export const QUIZZ_MODES = {
  QUIZ: "quiz",
  SURVEY: "survey",
} as const

export const QUESTION_TYPES = {
  SINGLE: "single",
  MULTI: "multi",
  ESTIMATION: "estimation",
} as const

export const ESTIMATION_INPUT_MODES = {
  SLIDER: "slider",
  INPUT: "input",
} as const

export const SCORING_MODES = {
  STRICT: "strict",
  BALANCED: "balanced",
  LENIENT: "lenient",
} as const

export const MEDIA_TYPES = {
  IMAGE: "image",
  VIDEO: "video",
  AUDIO: "audio",
} as const

export const MEDIA_URL_PREFIX = "/media/"

export const MAX_MEDIA_SIZE = 100 * 1024 * 1024

export const ACCEPTED_MEDIA_TYPES = {
  "image/png": { ext: ".png", type: MEDIA_TYPES.IMAGE },
  "image/jpeg": { ext: ".jpg", type: MEDIA_TYPES.IMAGE },
  "image/webp": { ext: ".webp", type: MEDIA_TYPES.IMAGE },
  "image/gif": { ext: ".gif", type: MEDIA_TYPES.IMAGE },
  "audio/mpeg": { ext: ".mp3", type: MEDIA_TYPES.AUDIO },
  "audio/ogg": { ext: ".ogg", type: MEDIA_TYPES.AUDIO },
  "audio/wav": { ext: ".wav", type: MEDIA_TYPES.AUDIO },
  "video/mp4": { ext: ".mp4", type: MEDIA_TYPES.VIDEO },
  "video/webm": { ext: ".webm", type: MEDIA_TYPES.VIDEO },
} as const

export const EXAMPLE_QUIZZ = {
  gameMode: QUIZZ_MODES.QUIZ,
  subject: "Example Quizz",
  questions: [
    {
      question: "Лена и Саша познакомились:",
      answers: [
        "В ночном клубе",
        "На сайте знакомств",
        "В синагоге",
        "На собрании анонимных алкоголиков",
      ],
      solutions: [2],
      cooldown: 5,
      time: 15,
    },
    {
      question: "Кто Лена по первому образованию?",
      answers: [
        "Учитель начальных классов",
        "Учитель английского",
        "Учитель немецкоко",
        "Учитель физкультуры",
      ],
      solutions: [1],
      cooldown: 5,
      time: 15,
    },
    {
      question:
        'В какой фильм Саша проходил кастинг и "срезался" на заключительном этапе?',
      answers: [
        "Приключения Петрова и Васечкина",
        "Чучело",
        "Гостья из будущего",
        "Приключения Буратино",
      ],
      solutions: [1],
      cooldown: 5,
      time: 20,
    },
    {
      question: "Каким спортом Лена НЕ занималась в детстве и юности?",
      answers: ["Баскетбол", "Горные лыжи", "Конный спорт", "Фигурное катание"],
      solutions: [1],
      cooldown: 5,
      time: 20,
    },
    {
      question: "Кого Саша НЕ обслуживал в ресторане?",
      answers: ["Роберт Де Ниро", "Билл Клинтон", "Иосиф Кобзон", "Джим Кэрри"],
      solutions: [3],
      cooldown: 5,
      time: 20,
    },
    {
      question: "Кем Ленв хотела стать в юности?",
      answers: ["Учителем", "Юристом", "Официанткой", "Спортсменкой"],
      solutions: [2],
      cooldown: 5,
      time: 15,
    },
    {
      question: "За какое нарушение дисциплины Сашу наказали в армии?",
      answers: [
        "Ел сало",
        "Ушёл самовольно за пивом",
        "Фотографировался с верблюдом",
        "Пил шабатное вино на посту",
      ],
      solutions: [2],
      cooldown: 5,
      time: 20,
    },
    {
      question: "С каким легендарным советским актёром Саша НЕ снимался в кино?",
      answers: [
        "Лев Дуров",
        "Олег Ефремов",
        "Алексей Жарков",
        "Георгий Мартиросян",
      ],
      solutions: [1],
      cooldown: 5,
      time: 20,
    },
    {
      question: "Что сделала Лена на праздновании своего 30го др?",
      answers: [
        "Уснула в ресторане",
        "Напилась и упала",
        "Подралась",
        "Уехала с незнакомцем",
      ],
      solutions: [0],
      cooldown: 5,
      time: 20,
    },
    {
      question: "Почему свадьба Лены и Саши была под угрозой срыва?",
      answers: [
        "Лена нарушила еврейские традиции",
        "Лена проспала после вечеринки",
        "Саша опоздал на венчание",
        "Саша нарушил еврейские традиции",
      ],
      solutions: [0],
      cooldown: 5,
      time: 20,
    },
    {
      question: "В каком порту Саша сделал свою первую татуировку?",
      answers: ["Одесса", "Ленинград", "Нью-Йорк", "Яффо"],
      solutions: [3],
      cooldown: 5,
      time: 15,
    },
    {
      question: "Любимое место отдыха Лены и Саши?",
      answers: ["Мексика", "Доминика", "Сочи", "Майами"],
      solutions: [1],
      cooldown: 5,
      time: 15,
    },
    {
      question: "Куда Лена и Саша планировали переехать в 2018 году?",
      answers: ["Калифорния", "Нью-Йорк", "Израиль", "Пенсильвания"],
      solutions: [0],
      cooldown: 5,
      time: 15,
    },
  ],
} as const