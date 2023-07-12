import { Response, Request, NextFunction } from 'express';
import { createPayments } from './payment.service';

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

export async function handlerPayment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { amount, paymentMethod } = req.body;

  try {
    const { id, card } = paymentMethod;

    const payment = await stripe.paymentIntents.create({
      amount,
      payment_method: id,
      currency: 'usd',
      description: 'Hotel Booking',
    });

    const confirmPayment = await stripe.paymentIntents.confirm(payment.id);

    if (confirmPayment.status === 'succeeded') {
      //await createPayments(payment);

      return res.status(200).json({ message: 'Payment successful', payment });
    }
    return res.status(400).json({ message: 'Payment denied' });
  } catch (error) {
    return next(error);
  }
}
