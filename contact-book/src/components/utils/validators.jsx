export const validateContactInputs = (contact, intitalData) => {
  return Object.entries(contact).every(([key, value]) => {
    if (!intitalData || value !== intitalData[key]) {
      if (key === 'avatar') {
        return value instanceof File
      } else {
        return (
          (typeof value === 'string' && value.trim() !== '') ||
          (typeof value === 'number' && value >= 0)
        )
      }
    } else {
      if (key === 'avatar') {
        return value
      } else {
        return true
      }
    }
  })
}
