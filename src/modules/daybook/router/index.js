export default {
  name: 'daybook',
  component: () =>
    import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout'),
  children: [
    {
      path: '',
      name: 'daybook-no-entry',
      component: () =>
        import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected')
    },
    {
      path: ':id',
      props: true,
      name: 'entry',
      component: () =>
        import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/EntryView')
    }
  ]
}
