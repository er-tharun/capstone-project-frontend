import React from 'react';
import './Features.css';
import { Link } from 'react-router-dom';
const Features = () => {
    return (
        <section className="features" id="cardio">
            <h1 className="heading">
                <span>FEATURES</span>
            </h1>
            <div className="box-container">

                <div className="box">
                    <img 
                        src="https://www.health.com/thmb/h_pCnDgIXG_ntqk-Odl2gEWYnhE=/724x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1128859388-3b0b4effeaaf495484cc8eb050965bfe.jpg" 
                        alt="Treadmill" 
                    />
                    <div className="content">
                        <span>CARDIO</span>
                        <h3>TREADMILL</h3>
                        <p>A treadmill is a device that is used to increase the speed and endurance of a person. It is a popular exercise machine for cardiovascular fitness.</p>
                    </div>
                </div>

                <div className="box">
                    <img 
                        src="https://media.istockphoto.com/id/509352826/photo/group-of-people-exercising-at-the-gym.jpg?s=612x612&w=0&k=20&c=M3e4eJSVySkCNy2I3NUfEbfyYAtNnGvqs935EzqjmpQ=" 
                        alt="Spin Bike" 
                    />
                    <div className="content">
                        <span>CARDIO</span>
                        <h3>SPIN BIKE</h3>
                        <p>Spinning is fantastic for building lean muscle in your legs and core. Leg workouts can be difficult for many people, but a spin bike offers a low-impact alternative that effectively targets your quads, hamstrings, calves, and core muscles. </p>
                    </div>
                </div>
                
                <div className="box">
                    <img 
                        src="https://5.imimg.com/data5/GLADMIN/VideoImage/2023/7/330212940/GT/TQ/EQ/647408/excel-efx-runner-elliptical-500x500.jpg" 
                        alt="EFX Machine" 
                    />
                    <div className="content">
                        <span>Full Body</span>
                        <h3>EFX MACHINE</h3>
                        <p>It activates various lower muscle groups, including the glutes, quads, hamstrings and calves. Because this machine makes use of your arms and legs, it can also be used to work out the arms, back and core</p>
                    </div>
                </div>

                <div className="box">
                    <img 
                        src="https://fitbod.me/wp-content/uploads/2021/07/yoga-and-the-gym-on-the-same-day.jpg" 
                        alt="YOGA" 
                    />
                    <div className="content">
                        <span>Full Body</span>
                        <h3>YOGA</h3>
                        <p>Yoga is a holistic practice that involves breathing, movement, and posture. It is a great way to improve your overall health and fitness.</p>
                    </div>
                </div>

                <div className="box">
                    <img 
                        src="https://img.livestrong.com/-/cme-data/getty%2F2ebe9b2485b34baebdb343da5149b17e.jpg" 
                        alt="LEG PRESS" 
                    />
                    <div className="content">
                        <span>LEG MACHINE</span>
                        <h3>LEG PRESS</h3>
                        <p>A leg press is a type of exercise that involves pressing down on the leg muscles. It is a great exercise for improving your leg strength and flexibility.</p>
                    </div>
                </div>

                <div className="box">
                    <img 
                        src="https://m.media-amazon.com/images/I/71k9XktPTIL.jpg" 
                        alt="SEATED CALF" 
                    />
                    <div className="content">
                        <span>LEG MACHINE</span>
                        <h3>SEATED CALF</h3>
                        <p>The seated calf raise stands out as a cornerstone in calf muscle exercises. This targeted exercise zeroes in on the calf muscles, primarily the often-overlooked soleus, nestled beneath the prominent gastrocnemius muscle.</p>
                    </div>
                </div>

                <div className="box">
                    <img 
                        src="https://www.shape.com/thmb/bd8nNwTRSsGGA1R8mYBhCirx5Zg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Rowing-Workout-GettyImages-1331153459-63b251d6189343848ae6d48ab0b36772.jpg" 
                        alt="ROWING MACHINE" 
                    />
                    <div className="content">
                        <span>TRICEPS</span>
                        <h3>ROWING MACHINE</h3>
                        <p>Rowing machines are designed to help athletes improve their rowing speed, endurance, and accuracy. They are popular for beginners and advanced athletes alike.</p>
                    </div>
                </div>

                <div className="box">
                    <img 
                        src="https://hortonbarbell.com/wp-content/uploads/2023/01/How-To-Ab-Machine-Crunch.png" 
                        alt="AB CRUNCH MACHINE" 
                    />
                    <div className="content">
                        <span>ABDOMINALS</span>
                        <h3>AB CRUNCH MACHINE</h3>
                        <p>An ab crunch machine is a device that targets the abdominal muscles, specifically the gluteal muscles. It is a great exercise for improving your stamina and strength.</p>
                    </div>
                </div>

                <div className="box">
                    <img 
                        src="https://img.freepik.com/premium-photo/asian-woman-doing-exercises-with-crossover-cable-machine-exercises-gym-fitness-healthy-style-concept_532405-4104.jpg" 
                        alt="CABLE CROSSOVER MACHINE" 
                    />
                    <div className="content">
                        <span>CHEST</span>
                        <h3>CABLE CROSSOVER MACHINE</h3>
                        <p>The cable machine provides constant tension throughout the entire range of motion, allowing you to build strength more efficiently and effectively.</p>
                    </div>
                </div>

                <div className="box">
                    <img 
                        src="https://steelsupplements.com/cdn/shop/articles/Lat_pulldowns_machine_-_cover_-_shutterstock_2137570149_1000x.jpg?v=1661886914" 
                        alt="LAT PULL DOWN MACHINE" 
                    />
                    <div className="content">
                        <span>BACK</span>
                        <h3>LAT PULL DOWN MACHINE</h3>
                        <p>A lat pull down machine is a device that targets the latissimus dorsi muscle, which is located in the back of the thigh. It is a great exercise for improving your lower back strength and mobility.</p>
                    </div>
                </div>

                <div className="box">
                    <img 
                        src="https://bodybuilding-wizard.com/wp-content/uploads/2014/07/machine-side-raises.jpg" 
                        alt="LATERAL RAISES MACHINE" 
                    />
                    <div className="content">
                        <span>DELTOIDS</span>
                        <h3>LATERAL RAISES MACHINE</h3>
                        <p>The lateral raises machine is a device that targets the deltoids, which are the muscles that control the lower back. It is a great exercise for improving your lower back strength and mobility.</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Features;
