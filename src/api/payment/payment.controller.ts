import Stripe from 'stripe';
import { Response, Request, NextFunction } from 'express';
import { createPayments } from './payment.service';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export async function handlerPayment(req: Request, res: Response, next: NextFunction) {
  const { amount, paymentMethod, description } = req.body;
  try {
    const { id, card } = paymentMethod;
    const payment = await stripe.paymentIntents.create({
      amount,
      payment_method: id,
      currency: "usd",
      description
    })
    const confirmPayment = await stripe.paymentIntents.confirm(payment.id);

    if (confirmPayment.status !== 'succeeded') {
      return res.status(400).json({ message: "Payment could not be made" })
    }
    await createPayments(payment);
    return res.status(200).json({ message: 'Payment made successfully', payment })
  } catch (error) {
    return next(error);
  }
}

