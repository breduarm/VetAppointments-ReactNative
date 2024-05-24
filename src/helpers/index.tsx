export const formatDate = (date: Date) => {
  const dateAppointment = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return dateAppointment.toLocaleDateString('en-US', options);
};

