<?php

use Illuminate\Database\Seeder;
use App\Models\Depute;
use App\Models\President;
use App\Models\Rapporteur;
use App\Models\Invite;
use App\Models\Commission;
use App\Models\Attribution;
use App\Models\Seance;
use App\Models\Rubrique;
use App\Models\Rapport;
use App\Models\Assistance;
use App\Models\Presence;
use App\Models\Absence;


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
            'titre'      => 'MME',
            'parti'      => 'PDC'
        ));
        Depute::create(array(
            'id'         => 2,
            'nom'        => 'Duvoyage',
            'prenom'     => 'Jean',
            'titre'      => 'M.',
            'parti'      => 'UDC'
        ));


        $this->command->info('The bears are alive!');

        // seed our fish table ------------------------
        // our fish wont have names... because theyre going to be eaten

        // we will use the variables we used to create the bears to get their id

        President::create(array(
            'id'  => 1,
            'nom' => 'Banderas',
            'prenom' => 'Antonio',
            'titre' => 'M.'
        ));
        President::create(array(
            'id'  => 2,
            'nom' => 'Hayek',
            'prenom' => 'Salma',
            'titre' => 'MME'
        ));

        $this->command->info('president ok');

        // seed our trees table ---------------------
        Rapporteur::create(array(
            'id'    => 1,
            'nom' => 'Orteur',
            'prenom' => 'Rappe',
            'titre' => 'M.'
        ));
        Rapporteur::create(array(
            'id'    => 2,
            'nom' => 'Christ',
            'prenom' => 'Jesus',
            'titre' => 'M.'

        ));

        $this->command->info('rapporteurs ok');

        // seed our trees table ---------------------
        Invite::create(array(
            'id'    => 1,
            'nom' => 'Chhen',
            'prenom' => 'Patrick',
            'titre' => 'M.'
        ));
        Invite::create(array(
            'id'    => 2,
            'nom' => 'Scheuner',
            'prenom' => 'Nicolas',
            'titre' => 'M.'

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

        $this->command->info('attribution ok');


        Seance::create(array(
            'id'    => 1,
            'date' => '2016-06-03',
            'heure_debut' => '16:00',
            'heure_fin' => '20:30',
            'president_id' => 1,
            'commission_id' => 2
        ));
        Seance::create(array(
            'id'    => 2,
            'date' => '2016-06-10',
            'heure_debut' => '17:00',
            'heure_fin' => '22:30',
            'president_id' => 2,
            'commission_id' => 1
        ));
        Seance::create(array(
            'id'    => 3,
            'date' => '2016-06-11',
            'heure_debut' => '18:00',
            'heure_fin' => '21:30',
            'president_id' => 2,
            'commission_id' => 1
        ));
        $this->command->info('seance ok');

        Rubrique::create(array(
            'id'    => 1,
            'titre'   => 'Approbation du dernier pv',
            'contenu' => 'blablabla',
            'heure_debut' => '16:00',
            'heure_fin' => '16:20',
            'seance_id' => 1
        ));
        Rubrique::create(array(
            'id'    => 2,
            'titre'   => 'OBJ-23423423',
            'contenu' => 'blublublu',
            'heure_debut' => '16:20',
            'heure_fin' => '16:55',
            'seance_id' => 1
        ));
        Rubrique::create(array(
            'id'    => 1,
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
