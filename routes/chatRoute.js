const express = require('express')
// const mongoose = require('mongoose')
// const Chat = require('../models/userChatModel')

const ChatRoute = express.Router();

// ChatRoute.post('/chat', async (req, res) => {
//     const { sender, message } = req.body;

//     if (!sender || !message) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//         const chat = await Chat.findOne({ sender });
//         if (chat) {
//             chat.messages.push({ sender, message });
//             await chat.save();
//             return res.status(200).json({ message: 'Message added' });
//         } else {
//             const newChat = new Chat({
//                 messages: [{ sender, message }]
//             });
//             await newChat.save();
//             return res.status(201).json({ message: 'Chat created and message added' });
//         }
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Something went wrong' });
//     }
// });

// get

// ChatRoute.get('/chat', async (req, res) => {
//     const { body } = req.query;

//     try {
//         if (!body) {
//             return res.status(403).json({ message: 'Required Type...' });
//         }

//         const userMessage = await Chat.find({ body });
//         if (!userMessage || userMessage.length === 0) {
//             return res.status(401).json({ message: 'No message found' });
//         } else {
//             res.status(200).json({ isSuccessfully: true, data: userMessage });
//         }
//     } catch (error) {
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// });

// get APi Dummy Data

const messagesUser = [
    {
        id: 1,
        name: 'Faizan',
        message: 'Assalam o walaikum',
        time: '10:00 AM',
        image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/473131633_587277280705643_8349970795055384666_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEC1XWHC0y6_56u2rji_xnR7hTvNJg4VPPuFO80mDhU89ProMEVSBJKPI0n7FWonCXZ6BW7hFmaEst4cjUXuCwm&_nc_ohc=ka2kCMPO3mwQ7kNvgGjSTvr&_nc_oc=AdgOdxeshoAm_hNlKk__FwynDvb5i5TZzymLSoCP79jp0fJm0u5icXvFk1t1kd0BxZ4&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AiKBWz8P1GkBKg01CVTEimF&oh=00_AYDeybvRg1WF_eE8IBoZSPndX7fr4jY9j0xFoem0uzrxJA&oe=6795921F'
    },
    {
        id: 2,
        name: 'Ahmed',
        message: 'Walaikum Assalam! Kya haal hain?',
        time: '10:02 AM',
        image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/461327300_1547258932565553_5312556386297250161_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHxq7rX_MvJQoB__TZGbkwsdQZqviP1-Sx1Bmq-I_X5LPFdsP3qK8PFPdzpADip_vUCUJuCeaJoHYP24UloiJ2z&_nc_ohc=wrontiyupDgQ7kNvgG51-Qo&_nc_oc=AdgInD0e9YWno9CfsG0ODvtecgdqK5TLexTYQetIY_t2zxBeAds7T6jwrZMXUIO0Ycg&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=Ay_EeSEn5RFISim1rtv1keM&oh=00_AYABhFwhFKV2OjhnMqKmBJ7u9wuJw1NVf_8IXm5j3WVl8w&oe=6795BBB4'
    },
    {
        id: 3,
        name: 'Faizan',
        message: 'Alhamdulillah, sab theek. Tum sunao?',
        time: '10:05 AM',
        image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/473131633_587277280705643_8349970795055384666_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEC1XWHC0y6_56u2rji_xnR7hTvNJg4VPPuFO80mDhU89ProMEVSBJKPI0n7FWonCXZ6BW7hFmaEst4cjUXuCwm&_nc_ohc=ka2kCMPO3mwQ7kNvgGjSTvr&_nc_oc=AdgOdxeshoAm_hNlKk__FwynDvb5i5TZzymLSoCP79jp0fJm0u5icXvFk1t1kd0BxZ4&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AiKBWz8P1GkBKg01CVTEimF&oh=00_AYDeybvRg1WF_eE8IBoZSPndX7fr4jY9j0xFoem0uzrxJA&oe=6795921F'
    },
    {
        id: 4,
        name: 'Ahmed',
        message: 'Alhamdulillah, bas kaam chal raha hai.',
        time: '10:07 AM',
        image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/461327300_1547258932565553_5312556386297250161_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHxq7rX_MvJQoB__TZGbkwsdQZqviP1-Sx1Bmq-I_X5LPFdsP3qK8PFPdzpADip_vUCUJuCeaJoHYP24UloiJ2z&_nc_ohc=wrontiyupDgQ7kNvgG51-Qo&_nc_oc=AdgInD0e9YWno9CfsG0ODvtecgdqK5TLexTYQetIY_t2zxBeAds7T6jwrZMXUIO0Ycg&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=Ay_EeSEn5RFISim1rtv1keM&oh=00_AYABhFwhFKV2OjhnMqKmBJ7u9wuJw1NVf_8IXm5j3WVl8w&oe=6795BBB4'
    },
    {
        id: 5,
        name: 'Faizan',
        message: 'Mashallah, kahan kaam kar rahe ho?',
        time: '10:10 AM',
        image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/473131633_587277280705643_8349970795055384666_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEC1XWHC0y6_56u2rji_xnR7hTvNJg4VPPuFO80mDhU89ProMEVSBJKPI0n7FWonCXZ6BW7hFmaEst4cjUXuCwm&_nc_ohc=ka2kCMPO3mwQ7kNvgGjSTvr&_nc_oc=AdgOdxeshoAm_hNlKk__FwynDvb5i5TZzymLSoCP79jp0fJm0u5icXvFk1t1kd0BxZ4&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AiKBWz8P1GkBKg01CVTEimF&oh=00_AYDeybvRg1WF_eE8IBoZSPndX7fr4jY9j0xFoem0uzrxJA&oe=6795921F'
    },
    {
        id: 6,
        name: 'Ahmed',
        message: 'Ek software company me. Tumhara kya plan hai?',
        time: '10:12 AM',
        image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/461327300_1547258932565553_5312556386297250161_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHxq7rX_MvJQoB__TZGbkwsdQZqviP1-Sx1Bmq-I_X5LPFdsP3qK8PFPdzpADip_vUCUJuCeaJoHYP24UloiJ2z&_nc_ohc=wrontiyupDgQ7kNvgG51-Qo&_nc_oc=AdgInD0e9YWno9CfsG0ODvtecgdqK5TLexTYQetIY_t2zxBeAds7T6jwrZMXUIO0Ycg&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=Ay_EeSEn5RFISim1rtv1keM&oh=00_AYABhFwhFKV2OjhnMqKmBJ7u9wuJw1NVf_8IXm5j3WVl8w&oe=6795BBB4'
    },
    {
        id: 7,
        name: 'Faizan',
        message: 'React Native internship ke liye try kar raha hoon.',
        time: '10:15 AM',
        image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/473131633_587277280705643_8349970795055384666_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEC1XWHC0y6_56u2rji_xnR7hTvNJg4VPPuFO80mDhU89ProMEVSBJKPI0n7FWonCXZ6BW7hFmaEst4cjUXuCwm&_nc_ohc=ka2kCMPO3mwQ7kNvgGjSTvr&_nc_oc=AdgOdxeshoAm_hNlKk__FwynDvb5i5TZzymLSoCP79jp0fJm0u5icXvFk1t1kd0BxZ4&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AiKBWz8P1GkBKg01CVTEimF&oh=00_AYDeybvRg1WF_eE8IBoZSPndX7fr4jY9j0xFoem0uzrxJA&oe=6795921F'
    },
    {
        id: 8,
        name: 'Ahmed',
        message: 'Best of luck! Mujhe umeed hai tumhe zaroor mil jayegi.',
        time: '10:18 AM',
        image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/461327300_1547258932565553_5312556386297250161_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHxq7rX_MvJQoB__TZGbkwsdQZqviP1-Sx1Bmq-I_X5LPFdsP3qK8PFPdzpADip_vUCUJuCeaJoHYP24UloiJ2z&_nc_ohc=wrontiyupDgQ7kNvgG51-Qo&_nc_oc=AdgInD0e9YWno9CfsG0ODvtecgdqK5TLexTYQetIY_t2zxBeAds7T6jwrZMXUIO0Ycg&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=Ay_EeSEn5RFISim1rtv1keM&oh=00_AYABhFwhFKV2OjhnMqKmBJ7u9wuJw1NVf_8IXm5j3WVl8w&oe=6795BBB4'
    },
    {
        id: 9,
        name: 'Faizan',
        message: 'JazakAllah! Duaon ka shukriya.',
        time: '10:20 AM',
        image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/473131633_587277280705643_8349970795055384666_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEC1XWHC0y6_56u2rji_xnR7hTvNJg4VPPuFO80mDhU89ProMEVSBJKPI0n7FWonCXZ6BW7hFmaEst4cjUXuCwm&_nc_ohc=ka2kCMPO3mwQ7kNvgGjSTvr&_nc_oc=AdgOdxeshoAm_hNlKk__FwynDvb5i5TZzymLSoCP79jp0fJm0u5icXvFk1t1kd0BxZ4&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AiKBWz8P1GkBKg01CVTEimF&oh=00_AYDeybvRg1WF_eE8IBoZSPndX7fr4jY9j0xFoem0uzrxJA&oe=6795921F'
    },
    {
        id: 10,
        name: 'Ahmed',
        message: 'Hamesha khush raho!',
        time: '10:22 AM',
        image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/461327300_1547258932565553_5312556386297250161_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHxq7rX_MvJQoB__TZGbkwsdQZqviP1-Sx1Bmq-I_X5LPFdsP3qK8PFPdzpADip_vUCUJuCeaJoHYP24UloiJ2z&_nc_ohc=wrontiyupDgQ7kNvgG51-Qo&_nc_oc=AdgInD0e9YWno9CfsG0ODvtecgdqK5TLexTYQetIY_t2zxBeAds7T6jwrZMXUIO0Ycg&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=Ay_EeSEn5RFISim1rtv1keM&oh=00_AYABhFwhFKV2OjhnMqKmBJ7u9wuJw1NVf_8IXm5j3WVl8w&oe=6795BBB4'
    }
];

// console.log(messagesUser);

ChatRoute.get('/Chat', (req, res) => {
    const { name, message, time, image } = req.body;
    try {
        if (!name || !message || !time || !image) {
            return res.status(404).json({ message: 'Some Fields Missing!' })
        }

        if (messagesUser && messagesUser.length > 0) {
            return res.status(200).json({
                isSuccessfully: true,
                message: 'Successfully Retrieved Data',
                data: messagesUser
            });
        } else {
            res.status(409).json({ message: 'Please Try Again No Data Founded' })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' })
    }
})


module.exports = ChatRoute;
