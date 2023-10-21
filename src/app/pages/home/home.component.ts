import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Candidate } from 'src/app/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public games$?: Observable<Candidate[]>;

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    // get a reference to the goty collection
    const gotyCollectionRef = collection(this.firestore, 'goty');

    // get documents (data) from the collection using collectionData
    this.games$ = collectionData(gotyCollectionRef).pipe(
      map((response: any) => response.map(({name, votes}: any) => ({name, value: votes})))
    ) as Observable<Candidate[]>;
  }
}
