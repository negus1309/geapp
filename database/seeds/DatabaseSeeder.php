<?php

use Illuminate\Database\Seeder;
use App\Models\Depute;
use App\Models\President;
use App\Models\Rapporteur;
use App\Models\Invite;
use App\Models\Procesverbaliste;
use App\Models\Commission;
use App\Models\Attribution;
use App\Models\Seance;
use App\Models\Rubrique;
use App\Models\Rapport;
use App\Models\Assistance;
use App\Models\Presence;
use App\Models\Absence;
use App\Models\Responsabilite;

class DatabaseSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Eloquent::unguard();

        // call our class and run our seeds
        $this->call('MyAppSeeder');
        $this->command->info('my app seeds finished.'); // show information in the command line after everything is run
    }

}

// our own seeder class
// usually this would be its own file
class MyAppSeeder extends Seeder {

    public function run() {

        // clear our database ------------------------------------------
        DB::table('deputes')->delete();
        DB::table('presidents')->delete();
        DB::table('invites')->delete();
        DB::table('rapporteurs')->delete();

        DB::table('assistances')->delete();
        DB::table('absences')->delete();
        DB::table('presences')->delete();
        DB::table('attributions')->delete();

        DB::table('commissions')->delete();
        DB::table('seances')->delete();
        DB::table('rapports')->delete();
        DB::table('rubriques')->delete();

        // seed our bears table -----------------------
        // we'll create three different bears

        // bear 1 is named Lawly. She is extremely dangerous. Especially when hungry.
        Depute::create(array(
            'id'         => 1,
            'nom'        => 'Empion',
            'prenom'     => 'Tarte',
            'titre'      => 'mme',
            'parti'      => 'pdc'
        ));
        Depute::create(array(
            'id'         => 2,
            'nom'        => 'Duvoyage',
            'prenom'     => 'Jean',
            'titre'      => 'm',
            'parti'      => 'udc'
        ));
        Depute::create(array(
            'id'         => 3,
            'nom'        => 'Armstrong',
            'prenom'     => 'Louis',
            'titre'      => 'm',
            'parti'      => 'pdc'
        ));
        Depute::create(array(
            'id'         => 4,
            'nom'        => 'Bush',
            'prenom'     => 'Georges',
            'titre'      => 'm',
            'parti'      => 'ps'
        ));
        Depute::create(array(
            'id'         => 5,
            'nom'        => 'Clinton',
            'prenom'     => 'Hillary',
            'titre'      => 'mme',
            'parti'      => 'ps'
        ));
        Depute::create(array(
            'id'         => 6,
            'nom'        => 'Trump',
            'prenom'     => 'Donald',
            'titre'      => 'm',
            'parti'      => 'mcg'
        ));
        $this->command->info('The bears are alive!');

        // seed our fish table ------------------------
        // our fish wont have names... because theyre going to be eaten

        // we will use the variables we used to create the bears to get their id

        President::create(array(
            'id'  => 1,
            'nom' => 'Banderas',
            'prenom' => 'Antonio',
            'titre' => 'm'
        ));
        President::create(array(
            'id'  => 2,
            'nom' => 'Hayek',
            'prenom' => 'Salma',
            'titre' => 'mme'
        ));

        $this->command->info('president ok');

        // seed our trees table ---------------------
        Rapporteur::create(array(
            'id'    => 1,
            'nom' => 'Orteur',
            'prenom' => 'Rappe',
            'titre' => 'm'
        ));
        Rapporteur::create(array(
            'id'    => 2,
            'nom' => 'Christ',
            'prenom' => 'Jesus',
            'titre' => 'm'

        ));

        $this->command->info('rapporteurs ok');
        Procesverbaliste::create(array(
            'id'    => 1,
            'nom' => 'Aliste',
            'prenom' => 'Proc',
            'titre' => 'm'
        ));
        Procesverbaliste::create(array(
            'id'    => 2,
            'nom' => 'Verba',
            'prenom' => 'Lise',
            'titre' => 'mme'

        ));

        $this->command->info('pcv ok');

        // seed our trees table ---------------------
        Invite::create(array(
            'id'    => 1,
            'nom' => 'Chhen',
            'prenom' => 'Patrick',
            'titre' => 'm'
        ));
        Invite::create(array(
            'id'    => 2,
            'nom' => 'Scheuner',
            'prenom' => 'Nicolas',
            'titre' => 'm'

        ));

        $this->command->info('invite ok');

        Commission::create(array(
            'id'    => 1,
            'nom' => 'Finances'
        ));
        Commission::create(array(
            'id'    => 2,
            'nom' => 'Environnement'
        ));

        $this->command->info('commissions ok');

        Attribution::create(array(
            'depute_id'    => 1,
            'commission_id' => 1
        ));
        Attribution::create(array(
            'depute_id'    => 2,
            'commission_id' => 2
        ));
        Attribution::create(array(
            'depute_id'    => 3,
            'commission_id' => 2
        ));
        Attribution::create(array(
            'depute_id'    => 4,
            'commission_id' => 2
        ));
        Attribution::create(array(
            'depute_id'    => 5,
            'commission_id' => 2
        ));
        Attribution::create(array(
            'depute_id'    => 6,
            'commission_id' => 2
        ));
        $this->command->info('attribution ok');


        Seance::create(array(
            //'id'    => 1,
            'token' => 'cmpjeii948g5mnmtu2wewmi2n3bt8trx2eepgp8jbj7vqjjor',
            'numero' => 200001,
            'date' => '2016-06-03',
            'heure_debut' => '16:00',
            'heure_fin' => '20:30',
            'president_id' => 1,
            'commission_id' => 2
        ));
        Seance::create(array(
          //  'id'    => 2,
          'token' => 'ampjeiitzelomnmtu2wewmi2n3bt8trx2eepgp8jbj7vqjjor',
            'numero' => 200002,
            'date' => '2016-06-10',
            'heure_debut' => '17:00',
            'heure_fin' => '22:30',
            'president_id' => 2,
            'commission_id' => 1
        ));
        Seance::create(array(
          //  'id'    => 3,
          'token' => 'bmpjeii948g5mnmtu2wewmifhtzg8trx2eepgp8jbj7vqjjor',
            'numero' => 200003,
            'date' => '2016-06-11',
            'heure_debut' => '18:00',
            'heure_fin' => '21:30',
            'president_id' => 2,
            'commission_id' => 1
        ));
        $this->command->info('seance ok');

        Rubrique::create(array(
            'numero'    => 1,
            'titre'   => 'Approbation du dernier pv',
            'contenu' => 'blablabla',
            'heure_debut' => '16:00',
            'heure_fin' => '16:20',
            'seance_id' => 1
        ));
        Rubrique::create(array(
            'numero'    => 2,
            'titre'   => 'OBJ-23423423',
            'contenu' => 'blublublu',
            'heure_debut' => '16:20',
            'heure_fin' => '16:55',
            'seance_id' => 1
        ));
        Rubrique::create(array(
            'numero'    => 1,
            'titre'   => 'Petit mot du président',
            'contenu' => 'bliblibli',
            'heure_debut' => '17:00',
            'heure_fin' => '17:20',
            'seance_id' => 2
        ));
        $this->command->info('rubrique ok');

        Rapport::create(array(
            'id'    => 1,
            'type'   => 'majorité',
            'rubrique_id' => 1,
            'rubrique_seance_id' => 1,
            'rapporteur_id' => 2
        ));

        $this->command->info('rapport ok');

        Assistance::create(array(
            'invite_id'    => 1,
            'seance_id'   => 1
        ));

        Assistance::create(array(
            'invite_id'    => 2,
            'seance_id'   => 1
        ));
        $this->command->info('assistance ok');

        Presence::create(array(
            'depute_id'    => 1,
            'seance_id'   => 1
        ));

        $this->command->info('presence ok');

        Absence::create(array(
            'depute_id'    => 2,
            'seance_id'   => 1
        ));

        $this->command->info('presence ok');
        // seed our picnics table ---------------------

        // we will create one picnic and apply all bears to this one picnic
        /*$picnicYellowstone = Picnic::create(array(
            'name'        => 'Yellowstone',
            'taste_level' => 6
        ));
        $picnicGrandCanyon = Picnic::create(array(
            'name'        => 'Grand Canyon',
            'taste_level' => 5
        ));

        // link our bears to picnics ---------------------
        // for our purposes we'll just add all bears to both picnics for our many to many relationship
        $bearLawly->picnics()->attach($picnicYellowstone->id);
        $bearLawly->picnics()->attach($picnicGrandCanyon->id);

        $bearCerms->picnics()->attach($picnicYellowstone->id);
        $bearCerms->picnics()->attach($picnicGrandCanyon->id);

        $bearAdobot->picnics()->attach($picnicYellowstone->id);
        $bearAdobot->picnics()->attach($picnicGrandCanyon->id);

        $this->command->info('They are terrorizing picnics!');*/

    }

}
