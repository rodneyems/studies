import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

interface Appointment {
  id: string;
  provider: string;
  date: Date;
}

const appointmentsRouter = Router();
const appointments: Appointment[] = [];

// eslint-disable-next-line consistent-return
appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;
  const parsedDate = startOfHour(parseISO(date));
  // eslint-disable-next-line no-console
  console.log(parsedDate);

  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
  );

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  if (findAppointmentInSameDate) {
    return res
      .status(400)
      .json({ message: 'This appointment is alredy booked' });
  }
  appointments.push(appointment);
  res.json(appointment);
});

export default appointmentsRouter;
