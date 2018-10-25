import { Request, Response } from 'express';

export let testctrl: Function = (req: Request, res: Response) => {
    res.json({ status: "working fine" });
}