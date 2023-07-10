import Stripe from 'stripe';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

import { Request, Response } from 'express';

export async function handlerPayment(req: Request, res: Response) {
  const { amount, paymentMethod } = req.body;
  try {
    const { id, card } = paymentMethod;
    const payment = await stripe.paymentIntents.create({
      amount,
      payment_method: id,
      currency: "usd",
      description: "Reserva de prueba"
    })
    const confirmPayment = await stripe.paymentIntents.confirm(payment.id);

    if (confirmPayment.status !== 'succeeded') {
      return res.status(400).json({ message: "Payment could not be made" })
    }

    console.log("🚀 ~ file: payment.controller.ts:20 ~ handlerPayment ~ confirmPayment:", confirmPayment)
    return res.status(200).json({ message: 'Payment made successfully', payment })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

