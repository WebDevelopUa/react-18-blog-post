export const accordionItemsReactHooks = [
    {
        id: 1,
        title: 'useState',
        content: 'Что делает вызов useState? Он объявляет «переменную состояния». Таким образом мы можем «сохранить» некоторые значения между вызовами функции. useState — это новый способ использовать те же' +
            ' возможности, что даёт this.state в классах. Обычно переменные «исчезают» при выходе из функции. К переменным состояния это не относится, потому что их сохраняет React.',
        link: 'https://ru.reactjs.org/docs/hooks-state.html'
    },
    {
        id: 2,
        title: 'useEffect',
        content: 'Что же делает useEffect? Используя этот хук, вы говорите React сделать что-то после рендера. React запомнит функцию (то есть «эффект»), которую вы передали и вызовет её после того, как внесёт все' +
            ' изменения в DOM. В этом эффекте мы устанавливаем заголовок документа, но мы также можем выполнить запрос данных или вызвать какой-нибудь императивный API.',
        link: 'https://ru.reactjs.org/docs/hooks-effect.html'
    },
    {
        id: 3,
        title: 'useContext',
        content: 'Принимает объект контекста (значение, возвращённое из React.createContext) и возвращает текущее значение контекста для этого контекста. Текущее значение контекста определяется пропом value' +
            ' ближайшего <MyContext.Provider> над вызывающим компонентом в дереве.',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#usecontext'
    },
    {
        id: 4,
        title: 'useRef',
        content: 'useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни' +
            ' компонента.',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#useref'
    },
    {
        id: 5,
        title: 'useCallback',
        content: 'Возвращает мемоизированный колбэк.',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#usecallback'
    },
    {
        id: 6,
        title: 'useMemo',
        content: 'Возвращает мемоизированное значение.',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#usememo'
    },
    {
        id: 7,
        title: 'useImperativeHandle',
        content: 'useImperativeHandle настраивает значение экземпляра, которое предоставляется родительским компонентам при использовании ref. Как всегда, в большинстве случаев следует избегать императивного кода,' +
            ' использующего ссылки. ',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#useimperativehandle'
    },
    {
        id: 8,
        title: 'useLayoutEffect',
        content: 'Сигнатура идентична useEffect, но этот хук запускается синхронно после всех изменений DOM. Используйте его для чтения макета из DOM и синхронного повторного рендеринга. Обновления, запланированные' +
            ' внутри useLayoutEffect, будут полностью применены синхронно перед тем, как браузер получит шанс осуществить отрисовку.',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#uselayouteffect'
    },
    {
        id: 9,
        title: 'useId',
        content: 'useId — это хук для создания уникальных идентификаторов, которые стабильны на сервере и клиенте, избегая при этом несоответствий гидратации.',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#useid'
    },
    {
        id: 10,
        title: 'useTransition',
        content: 'Возвращает значение состояния для отложенного состояния перехода и функцию для его запуска.',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#usetransition'
    },
    {
        id: 11,
        title: 'useDeferredValue',
        content: 'useDeferredValue принимает значение и возвращает новую копию значения, которая будет отложена до более срочных обновлений. Если текущий рендеринг является результатом срочного обновления, например,' +
            ' ввода пользователя, React вернет предыдущее значение, а затем отобразит новое значение после завершения срочного рендеринга.',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#usedeferredvalue'
    },
    {
        id: 12,
        title: 'useDebugValue',
        content: 'useDebugValue может использоваться для отображения метки для пользовательских хуков в React DevTools.',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#usedebugvalue'
    },
    {
        id: 13,
        title: 'useSyncExternalStore',
        content: 'useSyncExternalStore — это хук, рекомендуемый для чтения и подписки из внешних источников данных таким образом, чтобы он был совместим с функциями параллельного рендеринга, такими как выборочная' +
            ' гидратация и разделение времени.',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#usesyncexternalstore'
    },
    {
        id: 14,
        title: 'useInsertionEffect',
        content: 'Сигнатура идентична useEffect, но срабатывает синхронно перед всеми мутациями DOM. Используйте это, чтобы внедрить стили в DOM перед чтением макета в useLayoutEffect. Поскольку область действия' +
            ' этого хука ограничена, этот хук не имеет доступа к ссылкам и не может планировать обновления. ',
        link: 'https://ru.reactjs.org/docs/hooks-reference.html#useinsertioneffect'
    },
    {
        id: 15,
        title: 'useCustomHook',
        content: 'Custom Hook',
        link: 'https://ru.reactjs.org/docs/hooks-custom.html'
    },

]
