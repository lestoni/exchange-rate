'use strict';
/**
 * Load Module Dependencies.
 */
const debug        = require('debug')('api:exchange-rates-refresher-job');
const CronJob      = require('cron').CronJob;

const config          = require('../config');
const ecb             = require('../lib/ecb');
const db              = require('../db');

const JOBS_SCHEDULE = {
   // Per Info, they update everyday at 16 00 CEST daily,
   // Properly use UTC/GMT
   TIMER: '00 15 * * *',
   TIMEZONE: 'UTC'
 };

 // Ticker for Refreshing Exchanger Rate Info
async function onTick() {

  try {
    let data = await ecb();
    await db.Exchanger.upsert(data);

  } catch(ex) {
     // dump error in debug
     debug(`Error: ${ex.message}`);
  }
}

// Upsert or Seed Exchanger on worker load
async function seedExchanger() {
  try {
    let data = await ecb();
    await db.Exchanger.upsert(data);

  } catch(ex) {
     debug('seeding error:', ex.message);

     // create seed record if not present
     await db.Exchanger.findOrCreate({
       where:    {source:'European Central Bank'},
       defaults: {source: 'European Central Bank', rates: {}}
     })
  }
}


 module.exports = function initWorker() {
   debug('Init Job');

   // first time run
   seedExchanger();

   let job = new CronJob({
     cronTime: JOBS_SCHEDULE.TIMER,
     onTick: onTick,
     start: false,
     timezone: JOBS_SCHEDULE.TIMEZONE
   });

   return job;
 };
