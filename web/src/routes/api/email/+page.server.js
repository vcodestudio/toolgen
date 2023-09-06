export const actions = {
  license: async ({ cookies, request }) => {
    const data = await request.formData()
    const forms = ['name*', 'email*', 'number', 'desc*', 'company*']
    const values = {}
    const success = true
    let errors = {}
    forms.forEach(a => {
      const require = a.includes('*')
      a = a.replace('*', '')
      if (!data.has(a) && require) {
        success = false
        errors[a] = true
      } else {
        values[a] = data.get(a)
      }
    })

    return { success, values, errors }
  },
  sendDB: async ({ cookies, request }) => {
    const data = await request

    return { success: true, data }
  },
}
